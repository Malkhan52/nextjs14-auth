import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    return(
        <div className="h-full w-full flex flex-col items-center gap-y-10 justify-center bg-[radial-gradient(ellipse_At_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            <Navbar />
            {children}
        </div>
    );
}

export default ProtectedLayout;
