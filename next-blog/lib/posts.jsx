import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from 'remark-html'

const postDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostsData() {
    //get file names under/post
  const fileNames = fs.readdirSync(postDirectory);

  const allPostData = fileNames.map((fileName) => {

    //remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    //read markdown file as string
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
    }
    
    return blogPost

  });

  //sort by date
  return allPostData.sort((a,b) => a.date < b.date ? 1 : -1)

}


export async function getPostData(id){

    const fullPath = path.join(postDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    const processedContent = await remark().use(html).process(matterResult.content)

    const contentHtml = processedContent.toString()

    const blogPostWithHTML ={
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml

    }

    return blogPostWithHTML

}