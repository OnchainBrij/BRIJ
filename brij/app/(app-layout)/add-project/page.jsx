"use client"
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {createProject} from "../../utils";
import { useSignAndExecuteTransaction } from '@mysten/dapp-kit';

function AddProject() {
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();
  const router = useRouter();
  const [file, setFile] = useState("");
	const [cid, setCid] = useState("");
	const [uploading, setUploading] = useState(false);
  const [_digest, setDigest] = useState('');
  const [loading, setLoading] = useState(false);
  const [projectData, setProjectData] = useState({
      name: '',
      description: '',
      image: '',
      category: '',
      targetAmount: '',
      deadline: '',
  });


  const inputFile = useRef(null);

	const uploadFile = async (fileToUpload) => {
		try {
			setUploading(true);
			const formData = new FormData();
			formData.append("file", fileToUpload, `${fileToUpload.name}`);
			const request = await fetch("/api/files", {
				method: "POST",
				body: formData,
			});
			const response = await request.json();
			console.log(response);
			setCid(response?.IpfsHash);
            if (response?.IpfsHash) {
                setProjectData({ ...projectData, image: String(response?.IpfsHash) });
                console.log({projectData});
            }
            
            
			setUploading(false);
		} catch (e) {
			console.log(e);
			setUploading(false);
			alert("Trouble uploading file");
		}
	};

	const handleChange = (e) => {
		setFile(e.target.files[0]);
		uploadFile(e.target.files[0]);
	};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
        const deadlineTimestamp = Math.floor(new Date(projectData.deadline).getTime() / 1000);
       
        const trx = await createProject(
            projectData.name,
            projectData.description,
            projectData.image,
            projectData.category,
            Number(projectData.targetAmount),
            deadlineTimestamp
        );

        signAndExecuteTransaction({
            transaction: trx,
            chain: 'sui:testnet',
        }, {
            onSuccess: ({digest}) => {
                console.log("Transaction successful:", digest);
                router.push('/explore-projects');
                setDigest(digest);
            },
            onError: (error) => {
                console.error('Error creating Project:', error);
                setLoading(false);
            }
        });
    } catch (error) {
        console.error('Error:', error);
        setLoading(false);
    }
};


  return (  <div className="container mx-auto px-4 py-8 max-w-2xl">
    <h1 className="text-3xl font-bold mb-8">Apply for Project Funding</h1>

    <form onSubmit={handleSubmit} className=" space-y-6">
        <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2" >Project Name</label>
            <input id="name" type="text" required className="w-full p-2 border rounded-lg text-black" value={projectData.name} onChange={(e) => setProjectData({...projectData, name: e.target.value})}/>
        </div>

        <div>
            <label htmlFor="desc" className="block text-sm font-medium mb-2">Description</label>
            <textarea required className="w-full p-2 border rounded-lg h-32 text-black" value={projectData.description} onChange={(e) => setProjectData({...projectData, description: e.target.value})} id="desc"></textarea>

        </div>

        <div>
            <label className="block text-sm font-medium mb-2">
                Project Category
            </label>
            <select
                className="w-full text-black p-2 border rounded-lg"
                value={projectData.crowdfundType}
                onChange={(e) => setProjectData({...projectData, category: e.target.value})}
            >
                <option value="0">Select Category</option>
                <option value="Technology">Technology</option>
                <option value="Video">Video</option>
                <option value="Education">Education</option>
                <option value="Medical">Medical</option>
                <option value="Fashion">Fashion</option>
            </select>
        </div>

        <div>
            <label className="block text-sm font-medium mb-2">
                Target Amount (SUI)
            </label>
            <input
                type="number"
                required
                min="0"
                className="w-full text-black p-2 border rounded-lg"
                value={projectData.targetAmount}
                onChange={(e) => setProjectData({...projectData, targetAmount: e.target.value})}
            />
        </div>

        <div>
            <label className="block text-sm font-medium mb-2">
                Deadline
            </label>
            <input
                type="datetime-local"
                required
                className="w-full text-black p-2 border rounded-lg"
                value={projectData.deadline}
                onChange={(e) => setProjectData({...projectData, deadline: e.target.value})}
            />
        </div>
        <div>
        <label className="block text-sm font-medium mb-2">
                Project image
            </label>


               <input
                type="file"
                id="file"
                ref={inputFile}
                accept=".jpg, .jpeg, .png, .gif"
                onChange={handleChange}
                style={{ display: "none" }}
               />
                  <button
                  type="button"
                    disabled={uploading}
                    onClick={() => inputFile.current.click()}
                    className="w-[150px] bg-blue-600 text-white text-light rounded-3xl py-2 px-4 hover:bg-accent hover:text-light transition-all duration-300 ease-in-out"
                >
                    {uploading ? "Uploading..." : "Upload"}
                </button>
								
                  </div>

        <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
            {loading ? 'Creating...' : 'Create Project'}
        </button>
    </form>
</div>
)
}

export default AddProject;
