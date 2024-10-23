// File: vibesquad-frontend/src/app/(auth)/data-deletion/page.tsx
const DataDeletion = () => {
    return (
      <div className="container mx-auto mt-20 p-4">
        <h1 className="text-3xl font-bold mb-4">Data Deletion Request</h1>
        <p className="mb-2">
          If you wish to request the deletion of your data from our platform, please follow the instructions below.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Request via Email</h2>
        <p className="mb-2">
          You can request data deletion by sending an email to our support team at <a href="mailto:support@vibesquad.com" className="text-blue-500">support@vibesquad.com</a>. Please include your account details and the specific data you wish to be deleted.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Request via Form</h2>
        <p className="mb-2">
          Alternatively, you can fill out our <a href="/data-deletion-form" className="text-blue-500">Data Deletion Request Form</a> to initiate the process.
        </p>
      </div>
    );
  };
  
  export default DataDeletion;