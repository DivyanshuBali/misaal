import ProductTile from "@/components/ProductTile/ProductTile";
import { supabase } from "@/lib/supabase";

import styles from "./page.module.css";

export default async function IndexPage() {
  const { data } = await supabase.from("products").select("*");

  return (
    <main className={styles.mainContainer}>
      {data?.map((product) => {
        return <ProductTile key={product.id} {...product} />;
      })}
    </main>
  );
}
