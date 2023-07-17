import Link from "next/link";
import { client } from "../libs/client";
import styles from "@/styles/Home.module.scss";

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
  return (
    <div className={styles.container}>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
          {blog.title}
            {/* <a href="/">{blog.title}</a> */}
          </Link>
        </li>
      ))}
    </div>
  );
}
