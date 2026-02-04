import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

export default function Home() {
  const examplesDir = path.join(process.cwd(), "examples");
  // Ensure the directory exists to avoid errors if empty
  const files = fs.existsSync(examplesDir)
    ? fs.readdirSync(examplesDir).filter((file) => file.endsWith(".js"))
    : [];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold font-bricolage-grotesque  ">Index Page</h1>
      <ol className="flex flex-col gap-5 mt-10 font-poppins">
        {files.map((file) => {
          const id = file.replace(/\.js$/, "");
          return (
            <li key={id}>
              <Link href={`/${id}`}>Example {id}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
