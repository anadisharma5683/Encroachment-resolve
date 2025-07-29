// src/Pages/ComplaintForm.tsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Shadcn/UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Textarea ke liye
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from 'lucide-react'; // Icon ke liye

// Form ke data ke liye initial state
const initialFormData = {
  buildingName: '',
  area: '',
  landmark: '',
  streetName: '',
  colonyName: '',
  wardName: '',
  wardNumber: '',
  pinCode: '',
  city: '',
  state: '',
  country: '',
  complainerName: '',
  age: '',
  address: '',
  mobileNumber: '',
  complaintReason: '',
};

const ComplaintForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [buildingImages, setBuildingImages] = useState<File[]>([]);
  const [buildingImagePreviews, setBuildingImagePreviews] = useState<string[]>([]);
  const [qrImage, setQrImage] = useState<File | null>(null);
  const [qrImagePreview, setQrImagePreview] = useState<string | null>(null);
  const [imageLimitError, setImageLimitError] = useState<string>('');
  
  const navigate = useNavigate();

  // Sabhi text inputs ke changes ko handle karne ke liye
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  // Building images ke liye
  const handleBuildingImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const selectedFiles = Array.from(files);
    if (buildingImages.length + selectedFiles.length > 4) {
      setImageLimitError('Aap sirf 4 images tak upload kar sakte hain.');
      return;
    }
    
    setBuildingImages((prev) => [...prev, ...selectedFiles]);
    const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
    setBuildingImagePreviews(prev => [...prev, ...newPreviews]);
    setImageLimitError('');
  };

  // QR image ke liye
  const handleQrImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setQrImage(file);
      setQrImagePreview(URL.createObjectURL(file));
    }
  };
  
  // Image remove karne ke liye
  const removeBuildingImage = (indexToRemove: number) => {
    URL.revokeObjectURL(buildingImagePreviews[indexToRemove]);
    setBuildingImages((prev) => prev.filter((_, i) => i !== indexToRemove));
    setBuildingImagePreviews((prev) => prev.filter((_, i) => i !== indexToRemove));
  };
  
  // Form submit karne ke liye
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", { ...formData, qrImage, buildingImages });
    alert("Complaint submitted successfully!");
    navigate('/complain_done');
  };

  // Memory leaks se bachne ke liye cleanup
  useEffect(() => {
    return () => {
      buildingImagePreviews.forEach(url => URL.revokeObjectURL(url));
      if (qrImagePreview) {
        URL.revokeObjectURL(qrImagePreview);
      }
    };
  }, [buildingImagePreviews, qrImagePreview]);


  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">Lodge a Complaint</CardTitle>
        <CardDescription>Fill in the details below to submit your complaint.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: QR Code ya Manual Entry */}
          <fieldset className="border-t pt-6">
            <legend className="text-lg font-medium text-center px-4 -mt-10 bg-white">Address Information</legend>
            <div className="text-center">
                <Label htmlFor="qr-upload" className="inline-block cursor-pointer">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                        <p className="font-semibold text-primary">Upload Digital Address QR</p>
                        <p className="text-sm text-gray-500 mt-1">Under Har Ghar Ka Digital Pata Scheme</p>
                    </div>
                </Label>
                <Input id="qr-upload" type="file" accept="image/*" onChange={handleQrImageUpload} className="hidden" />
                {qrImagePreview && (
                    <div className="mt-4 inline-block relative">
                        <img src={qrImagePreview} alt="QR Preview" className="h-24 w-24 object-cover rounded-md border" />
                    </div>
                )}
            </div>
            <div className="flex items-center my-6">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="px-3 text-gray-500 font-semibold text-sm">OR</span>
                <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="buildingName">Building Name/Number <span className="text-red-500">*</span></Label>
                <Input id="buildingName" name="buildingName" value={formData.buildingName} onChange={handleInputChange} placeholder="e.g., 123, ABC Apartments" required />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="area">Area <span className="text-red-500">*</span></Label>
                <Input id="area" name="area" value={formData.area} onChange={handleInputChange} placeholder="e.g., Vijay Nagar" required />
              </div>
              {/* --- Baaki saare Address fields yahaan daalein --- */}
            </div>
          </fieldset>
          
          {/* Section 2: Building Images */}
          <fieldset className="border-t pt-6">
             <legend className="text-lg font-medium text-center px-4 -mt-10 bg-white">Evidence</legend>
            <Label>Upload Building Images (Max 4)</Label>
            <div className="mt-2 p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                <Label htmlFor="building-images-upload" className="text-primary font-semibold cursor-pointer">
                    Click here to upload
                </Label>
                <Input id="building-images-upload" type="file" multiple accept="image/*" onChange={handleBuildingImageUpload} className="hidden" />
            </div>
            {imageLimitError && <p className="text-sm text-red-500 mt-2">{imageLimitError}</p>}
            <div className="mt-4 flex flex-wrap gap-4">
                {buildingImagePreviews.map((preview, index) => (
                    <div key={index} className="relative">
                        <img src={preview} alt={`preview ${index}`} className="h-24 w-24 object-cover rounded-lg border-2"/>
                        <button type="button" onClick={() => removeBuildingImage(index)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center font-bold text-xs hover:bg-red-600">
                            X
                        </button>
                    </div>
                ))}
            </div>
          </fieldset>

          {/* Section 3: Complainer's Details */}
          <fieldset className="border-t pt-6">
            <legend className="text-lg font-medium text-center px-4 -mt-10 bg-white">Complainer's Details (Optional)</legend>
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>
                If complainer choose to be anonymous and not submit his/her details they will not recieve the reward for their complain.
              </AlertDescription>
            </Alert>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="complainerName">Complainer Name</Label>
                <Input id="complainerName" name="complainerName" value={formData.complainerName} onChange={handleInputChange} placeholder="Your Name" />
              </div>
              {/* --- Baaki complainer fields yahaan --- */}
            </div>
          </fieldset>
          
          {/* Section 4: Complaint Reason */}
          <fieldset className="border-t pt-6">
            <legend className="text-lg font-medium text-center px-4 -mt-10 bg-white">Reason</legend>
             <div className="grid w-full gap-1.5">
              <Label htmlFor="complaintReason">Complaint Reason</Label>
              <Textarea id="complaintReason" name="complaintReason" value={formData.complaintReason} onChange={handleInputChange} placeholder="Type your complaint here." />
            </div>
          </fieldset>
          
          <CardFooter className="flex justify-end p-0 pt-6">
            <Button type="submit" size="lg">Submit Complaint</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default ComplaintForm;