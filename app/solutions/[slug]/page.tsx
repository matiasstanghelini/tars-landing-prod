export function generateStaticParams(): { slug: string }[] {
    return [
        { slug: "platforma-ecommerce" },
        { slug: "soluciones-para-comercios-digitales" },
    ]
}
 
export default function Page() {
  return <h1>Hello, Blog Post Page!</h1>
}