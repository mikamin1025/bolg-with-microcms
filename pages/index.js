import Link from "next/link";
import { client } from "../libs/client";
import styles from "@/styles/Home.module.scss";
import ConvertDate from "../libs/convertdate";

//SSGを使ってデータを取得
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  console.log(blog);
  return (
    <div className={styles.container}>
      <h1>Blog</h1>
      {blog.map((blog) => (
        <li key={blog.id} className={styles.post_content}>
          <Link href={`blog/${blog.id}`}>
            <h2 className={styles.post_content_text}>{blog.title}</h2>
            <p className={styles.post_content_text}><ConvertDate convertDate={blog.createdAt}></ConvertDate></p>
            {/* <a href="/">{blog.title}</a> */}
          </Link>
        </li>
      ))}
    </div>
  );
}
