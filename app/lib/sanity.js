import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
export const client = createClient({
    projectId:'d8lr9k4e',
    dataset:'production',
    apiVersion:'2022-05-25',
    useCdn:'true'
}
)

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export { urlFor };

// const builder = imageUrlBuilder(client)

// export function urlFor(source){
//     return builder.image(source)
// }