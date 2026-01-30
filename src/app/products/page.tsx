import { Suspense } from "react";
import ProductTile from "@/components/ProductTile/ProductTile";
import { supabase } from "@/lib/supabase";
import styles from "./page.module.css";

async function ProductsListings() {
  const { data } = await supabase.from("products").select("*");

  return (
    <main className={styles.mainContainer}>
      {data?.map((product) => {
        return <ProductTile key={product.id} {...product} />;
      })}
    </main>
  );
}

export default async function ProductsPage() {
  return (
    <Suspense fallback={<ProductsListingLoader />}>
      <ProductsListings />
    </Suspense>
  );
}

function ProductsListingLoader() {
  return (
    <section className={styles.productsListingLoader}>
      <div>LOADING..</div>
    </section>
  );
}
