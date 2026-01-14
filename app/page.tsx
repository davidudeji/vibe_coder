import UserButton from "@/modules/auth/components/user-button";


export default function Home() {
  return (
    <>
       
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="p-6 bg-white rounded shadow"><h1 className="text-xl">Welcome</h1></div>
        
        <UserButton/>
        </div>
       
    </>
  );
}
