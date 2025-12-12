"use client";

import styles from "./ProductTile.module.css";

import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  product_code: string;
  title: string;
  date: string;
  banner_image_url: string;
};

function ProductTile(props: Props) {
  return (
    <div className={styles.productTile}>
      <Link href={`/index/${props.id}`}>
        <Image
          src={props.banner_image_url}
          alt={`${props.title} image`}
          width={300}
          height={400}
        />
        <div className={styles.revealInfo}>
          <h4>{props.product_code}</h4>
          <h4>{props.title}</h4>
          <h4>{props.date}</h4>
        </div>
      </Link>
    </div>
  );
}

export default ProductTile;
