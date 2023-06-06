import { NextResponse } from 'next/server';
import { initialize as ProductModuleInitialize } from "@medusajs/product"

export async function GET(request: Request) {
  global.productService = global.productService ??
    (await ProductModuleInitialize());

  const data = await global.productService.list()

  return NextResponse.json({ products: data });
}