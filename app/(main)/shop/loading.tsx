import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Loader className="text-muted-foreground stroke-[4] h-4 w-4 amimate-spin" />
    </div>
  );
};

export default Loading;
