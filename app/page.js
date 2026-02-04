import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

export default function Home() {
  const examplesDir = path.join(process.cwd(), "public", "examples");
  // Ensure the directory exists to avoid errors if empty
  const files = fs.existsSync(examplesDir)
    ? fs.readdirSync(examplesDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .filter((dirent) => fs.existsSync(path.join(examplesDir, dirent.name, "index.html")))
      .map((dirent) => dirent.name)
    : [];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold font-bricolage-grotesque  ">Index Page</h1>
      <ol className="flex flex-col gap-5 mt-10 font-poppins">
        {files.map((id) => {
          return (
            <li key={id}>
              <Link href={`/examples/${id}/index.html`}>Example {id}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
