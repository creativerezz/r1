import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { AppSidebar } from "@/components/app-sidebar"
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world"
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form"
import PokemonPage from "@/registry/new-york/blocks/complex-component/page"
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card"
import { DialogExample } from "@/registry/new-york/blocks/components-showcase/dialog-example"
import { TableExample } from "@/registry/new-york/blocks/components-showcase/table-example"
import { AccordionExample } from "@/registry/new-york/blocks/components-showcase/accordion-example"
import { SelectExample } from "@/registry/new-york/blocks/components-showcase/select-example"
import { Badge } from "@/registry/new-york/ui/badge"
import { Blocks, Layers, FileText, Package } from "lucide-react"

export default function Home() {
  return (
    <div className="flex">
      <AppSidebar />
      <main className="flex-1">
        <div className="container max-w-5xl py-8 md:py-12 lg:py-16">
          {/* Hero Section */}
          <div className="flex flex-col items-start gap-4 mb-12">
            <Badge variant="secondary">Component Registry</Badge>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Beautiful components for your next project
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A curated collection of 19+ accessible, production-ready components built with Next.js 15, React 19, Tailwind CSS v4, and Radix UI. Install via shadcn CLI.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <code className="relative rounded bg-muted px-3 py-1.5 text-sm font-mono">
                npx shadcn@latest add https://rezajafar.com/r/registry.json
              </code>
            </div>
          </div>

          {/* Components Grid */}
          <div className="space-y-16">
            {/* Form Components Section */}
            <section id="form">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight">Form Components</h2>
              </div>
              <div className="grid gap-8">
                <div className="flex flex-col gap-4 border rounded-lg p-6 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Contact Form</h3>
                      <p className="text-sm text-muted-foreground">
                        A contact form with Zod validation and accessible error handling.
                      </p>
                    </div>
                    <OpenInV0Button name="example-form" className="w-fit" />
                  </div>
                  <div className="flex items-center justify-center min-h-[500px] relative">
                    <ExampleForm />
                  </div>
                </div>

                <div className="flex flex-col gap-4 border rounded-lg p-6 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Select Dropdown</h3>
                      <p className="text-sm text-muted-foreground">
                        A select dropdown with grouped items and keyboard navigation.
                      </p>
                    </div>
                    <OpenInV0Button name="select-example" className="w-fit" />
                  </div>
                  <div className="flex items-center justify-center min-h-[300px] relative">
                    <SelectExample />
                  </div>
                </div>
              </div>
            </section>

            {/* Layout Components Section */}
            <section id="layout">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight">Layout Components</h2>
              </div>
              <div className="grid gap-8">
                <div className="flex flex-col gap-4 border rounded-lg p-6 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Dialog Modal</h3>
                      <p className="text-sm text-muted-foreground">
                        A modal dialog with form inputs and accessible overlay.
                      </p>
                    </div>
                    <OpenInV0Button name="dialog-example" className="w-fit" />
                  </div>
                  <div className="flex items-center justify-center min-h-[300px] relative">
                    <DialogExample />
                  </div>
                </div>

                <div className="flex flex-col gap-4 border rounded-lg p-6 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Accordion</h3>
                      <p className="text-sm text-muted-foreground">
                        An accordion with FAQ items and smooth animations.
                      </p>
                    </div>
                    <OpenInV0Button name="accordion-example" className="w-fit" />
                  </div>
                  <div className="flex items-center justify-center min-h-[300px] relative">
                    <AccordionExample />
                  </div>
                </div>
              </div>
            </section>

            {/* Data Display Section */}
            <section id="data">
              <div className="flex items-center gap-3 mb-6">
                <Blocks className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight">Data Display</h2>
              </div>
              <div className="grid gap-8">
                <div className="flex flex-col gap-4 border rounded-lg p-6 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Data Table</h3>
                      <p className="text-sm text-muted-foreground">
                        A responsive table with invoice data and status badges.
                      </p>
                    </div>
                    <OpenInV0Button name="table-example" className="w-fit" />
                  </div>
                  <div className="flex items-center justify-center min-h-[500px] relative">
                    <TableExample />
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Section */}
            <section id="interactive">
              <div className="flex items-center gap-3 mb-6">
                <Package className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight">Interactive Examples</h2>
              </div>
              <div className="grid gap-8">
                <div className="flex flex-col gap-4 border rounded-lg p-6 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Complex Component</h3>
                      <p className="text-sm text-muted-foreground">
                        A complex component showing hooks, libs, and server components with data fetching.
                      </p>
                    </div>
                    <OpenInV0Button name="complex-component" className="w-fit" />
                  </div>
                  <div className="flex items-center justify-center min-h-[400px] relative">
                    <PokemonPage />
                  </div>
                </div>

                <div className="flex flex-col gap-4 border rounded-lg p-6 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Custom CSS Integration</h3>
                      <p className="text-sm text-muted-foreground">
                        A login form demonstrating custom CSS file integration.
                      </p>
                    </div>
                    <OpenInV0Button name="example-with-css" className="w-fit" />
                  </div>
                  <div className="flex items-center justify-center min-h-[400px] relative">
                    <ExampleCard />
                  </div>
                </div>

                <div className="flex flex-col gap-4 border rounded-lg p-6 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Hello World</h3>
                      <p className="text-sm text-muted-foreground">
                        A simple starter component to get you started.
                      </p>
                    </div>
                    <OpenInV0Button name="hello-world" className="w-fit" />
                  </div>
                  <div className="flex items-center justify-center min-h-[200px] relative">
                    <HelloWorld />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
