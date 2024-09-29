import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/Components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full h-full">

        <AccordionItem value="item-1">
          <AccordionTrigger><span className="text-blue-900">Is it safe ?</span></AccordionTrigger>
          <AccordionContent>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger><span className="text-blue-900">Is it noisy ?</span></AccordionTrigger>
          <AccordionContent>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse adipisci minus veniam quisquam! Doloribus.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger><span className="text-blue-900">How long wil it take</span></AccordionTrigger>
          <AccordionContent>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti sequi omnis excepturi! Voluptatem, explicabo aperiam.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            <span className="text-blue-900">
          How do I pay ?
          </span>
          </AccordionTrigger>
          <AccordionContent>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ratione ut modi quaerat deserunt sit! Optio veniam beatae nemo velit?
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
          <span className="text-blue-900">
          How do I pay ?
          </span>
            </AccordionTrigger>
          <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, deleniti.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    )
  }
  