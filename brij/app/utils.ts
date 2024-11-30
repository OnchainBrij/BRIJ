import { clientTransactions, BrijProjectsQueries } from "./smart-contract/brigContractIntegration";

const brigProjectsQueries = new BrijProjectsQueries();

export interface ProjectInfo {
    id?: string;
    name: string;
    description: string;
    image: string;
    category: string;
    creator: string;
    targetAmount: number;
    currentAmount: number;
    deadline: number;
    isActive: boolean;
    isSuccessful: boolean;
    isBookmarked: boolean;
}

export interface Contributor {
    address: string;
    amount: number;
    timestamp: number;
}

export const createProject = async (
    name: string,
    description: string,
    image: string,
    category: string,
    targetAmount: number,
    deadline: number,
) => {
    return clientTransactions.createProject(name, description, image, category, targetAmount, deadline);
}

export const getAllProjects = async () => {
    const projects = await brigProjectsQueries.getAllProjects();
    return projects;
}

export const getProjectInfo = async (projectId: string) => {
    return await brigProjectsQueries.getProjectInfo(projectId);
}

export const contributeToCampaign = async (
    projectId: string, 
    amount: number
) => {
    return clientTransactions.contribute(projectId, amount);
}

export const getCampaignContributors = async (
    projectId: string
) => {
    return await brigProjectsQueries.getContributors(projectId);
}

export const isContributor = async (
    projectId: string, 
    address: string
): Promise<boolean> => {
    return await brigProjectsQueries.isContributor(projectId, address);
}

export const withdrawFunds = async (projectId: string) => {
    return clientTransactions.withdraw(projectId);
}

export const finalizeCrowdfund = async (projectId: string) => {
    return clientTransactions.finalizeProjectCampaign(projectId);
}

export const getProjectDetailsWithContributors = async (
    projectId: string
) => {
    const info = await brigProjectsQueries.getProjectInfo(projectId);
    const contributors = await brigProjectsQueries.getContributors(projectId);

    if (info && contributors) {
        return {
            ...info,
            contributors
        };
    }

    return null;
}

export const checkCampaignStatus = async (projectId: string) => {
    const wasFinalized = await brigProjectsQueries.checkIfProjectCampaignEnded(projectId);
    if (wasFinalized) {
        return await brigProjectsQueries.getProjectInfo(projectId);
    }
    return null;
}

// Get campaign progress
export const getCampaignProgress = async (projectId: string) => {
    const info = await brigProjectsQueries.getProjectInfo(projectId);
    
    if (info) {
        const progress = (Number(info.currentAmount) / Number(info.targetAmount)) * 100;
        return {
            currentAmount: info.currentAmount,
            targetAmount: info.targetAmount,
            progress: Math.min(progress, 100),
            isComplete: progress >= 100
        };
    }
    
    return null;
}
