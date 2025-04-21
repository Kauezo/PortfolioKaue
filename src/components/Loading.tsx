import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <Loader2 role="status" className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
};

export default Loading; 