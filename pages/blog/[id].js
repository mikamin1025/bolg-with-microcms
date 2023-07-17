import { Main } from "next/document";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss"

//SSG
export const getStaticProps = async (context) => {
  //URLに書かれているidを取得する
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false, //指定していないURLには404エラーを返す
  };
};

export default function BlogId({ blog }) {
  return (
  <main className={styles.main}>
    <h1 className={styles.title}>{blog.title}</h1>
    <p className={styles.publishedAt}>{blog.publishedAt}</p>
    <div dangerouslySetInnerHTML={{__html:`${blog.body}`}} className={styles.post}></div>
  </main>
  );
}
