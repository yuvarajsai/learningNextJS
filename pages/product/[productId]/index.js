import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  console.log(router);
  const productId = router.query.productId;
  return (
    <>
      <h2>details of the product: {productId}</h2>
    </>
  );
};

export default ProductDetails;

// We basically do dynamic nesting by creating a file in [] (square brackets).

// useRouter hook is used to fetch the router and we can get our productId by using query fuction of router object

// Also note, explicit routes are more preferred over dynamic routes

// One more notable point for Nested dynamic routing is that we can even make folders using square brackets. [route-name]

/*
router: {
  "pathname": "/product/[productId]",
  "route": "/product/[productId]",
  "query": {},
  "asPath": "/product/[productId]",
  "components": {
      "/product/[productId]": {
          "initial": true,
          "props": {
              "pageProps": {}
          }
      },
      "/_app": {
          "styleSheets": []
      }
  },
  "isFallback": false,
  "basePath": "",
  "isReady": false,
  "isPreview": false,
  "isLocaleDomain": false,
  "events": {}
}
*/
