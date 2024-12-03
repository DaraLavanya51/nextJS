export default async function productID({
    params
}: {
    params: { productID: string };
}) {
    const { productID } = await params;
    return <h1>Details about product {productID}</h1>;
}