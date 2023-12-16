{/*import { client } from "@/lib/sanityClient"
import Image from "next/image";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";

export const getProductData = async () => {
const res = await client.fetch(`*[_type=="product"]{
  price,
  _id,
  title,
  image,
  category -> {
    name
  }
}`);
return res

}

interface IProduct {
  title: string,
  _id: string,
  
  image: IImage,
  price:number,
  category: {
    name: string
  }

}


export default async function Home() {

  const data: IProduct[] = await getProductData()

  return (
   <div className="grid grid-cols-3">
    {data.map((item) => (
    <div>
      <Image 
      width={300}
      height={300}
      src={urlForImage(item.image).url()} alt="product" />
     </div>
))}

   </div>
  
  
    )
}
*/}
import { client } from "@/lib/sanityClient";
import Image from "next/image";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    price,
    _id,
    title,
    image,
    category -> {
      name
    },
    
  }`);
  return res;
};

interface IProduct {
  title: string;
  _id: string;
  description: string;
  image: IImage;
  price: number;
  category: {
    name: string;
  };
}

export default function Home({ products }: { products: IProduct[] }) {
  return (
    <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-x-10">
      {products.map((item) => (
        <div key={item._id}> {/* Add a unique key */}
          <Image className="max-h-[200px] object-cover object-top"
            width={200}
            height={200}
            src={urlForImage(item.image).url()}
            alt="product"
          />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <p>{item.category.name}</p>
          <button className="border py-2 px-6 rounded text-white bg-blue-600">Add to Card</button>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const products: IProduct[] = await getProductData();
  return {
    props: { products },
  };
}
