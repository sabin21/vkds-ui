"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Pencil2Icon } from "@radix-ui/react-icons";

export default function ComViewContent() {
    
  return (
    <div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Orientation : Horizontal</h4>
    </span>
    <div className="component-view-wrap">
      <div className="inner-view flex-col">
        <span className="block w-full align-left mb-4">Size : sm</span>
        <div className="example-view">

          <Tabs defaultValue="tab1" className="tabs-block-wrap">
            <TabsList size="sm">
              <TabsTrigger value="tab1">
                <div className="tab-link">
                  <Pencil2Icon />
                  <span className="link-text">탭아이템 1</span>
                  <span className="badge outline">99</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="tab2">
                <div className="tab-link">
                  <Pencil2Icon />
                  <span className="link-text">탭아이템 2</span>
                  <span className="badge outline">99</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="tab3">
                <div className="tab-link">
                  <Pencil2Icon />
                  <span className="link-text">탭아이템 3</span>
                  <span className="badge outline">99</span>
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="w-full h-56 flex justify-center items-center rounded-[12px] bg-gray-100 mt-10">
                <p className="font-bold">Tab 1 컨텐츠 그룹</p>
              </div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="w-full h-56 flex justify-center items-center rounded-[12px] bg-gray-100 mt-10">
                <p className="font-bold">Tab 2 컨텐츠 그룹</p>
              </div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="w-full h-56 flex justify-center items-center rounded-[12px] bg-gray-100 mt-10">
                <p className="font-bold">Tab 3 컨텐츠 그룹</p>
              </div>
            </TabsContent>
          </Tabs>

        </div>

        <span className="block w-full align-left mb-4 mt-[40px]">Size : md</span>
        <div className="example-view">

          <Tabs defaultValue="tab1" className="tabs-block-wrap">
            <TabsList size="md">
              <TabsTrigger value="tab1">
                <div className="tab-link">
                  <Pencil2Icon />
                  <span className="link-text">탭아이템 1</span>
                  <span className="badge outline">99</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="tab2">
                <div className="tab-link">
                  <Pencil2Icon />
                  <span className="link-text">탭아이템 2</span>
                  <span className="badge outline">99</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="tab3">
                <div className="tab-link">
                  <Pencil2Icon />
                  <span className="link-text">탭아이템 3</span>
                  <span className="badge outline">99</span>
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="w-full h-56 flex justify-center items-center rounded-[12px] bg-gray-100 mt-10">
                <p className="font-bold">Tab 1 컨텐츠 그룹</p>
              </div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="w-full h-56 flex justify-center items-center rounded-[12px] bg-gray-100 mt-10">
                <p className="font-bold">Tab 2 컨텐츠 그룹</p>
              </div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="w-full h-56 flex justify-center items-center rounded-[12px] bg-gray-100 mt-10">
                <p className="font-bold">Tab 3 컨텐츠 그룹</p>
              </div>
            </TabsContent>
          </Tabs>

        </div>  
      </div>
    </div>
    
    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Orientation : Vertical</h4>
    </span>
    <div className="component-view-wrap">
      <div className="inner-view flex-col">
        <span className="block w-full align-left mb-4">Size : sm</span>
        <div className="example-view">

          <Tabs defaultValue="tab1" className="tabs-block-wrap" orientation="vertical">
            <TabsList size="sm">
              <TabsTrigger value="tab1">
                <div className="tab-link">
                  <Pencil2Icon />
                  <span className="link-text">탭아이템 1</span>
                  <span className="badge outline">99</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="tab2">
                <div className="tab-link">
                  <Pencil2Icon />
                  <span className="link-text">탭아이템 2</span>
                  <span className="badge outline">99</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="tab3">
                <div className="tab-link">
                  <Pencil2Icon />
                  <span className="link-text">탭아이템 3</span>
                  <span className="badge outline">99</span>
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="w-full h-96 flex justify-center items-center rounded-[12px] bg-gray-100">
                <p className="font-bold">Tab 1 컨텐츠 그룹</p>
              </div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="w-full h-80 flex justify-center items-center rounded-[12px] bg-gray-100">
                <p className="font-bold">Tab 2 컨텐츠 그룹</p>
              </div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="w-full h-96 flex justify-center items-center rounded-[12px] bg-gray-100">
                <p className="font-bold">Tab 3 컨텐츠 그룹</p>
              </div>
            </TabsContent>
          </Tabs>

        </div>

        <span className="block w-full align-left mb-4 mt-[40px]">Size : md</span>
        <div className="example-view">

          <Tabs defaultValue="tab1" className="tabs-block-wrap" orientation="vertical">
            <TabsList size="md">
              <TabsTrigger value="tab1">
                <div className="tab-link">
                  <Pencil2Icon />
                  <span className="link-text">탭아이템 1</span>
                  <span className="badge outline">99</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="tab2">
                <div className="tab-link">
                  <Pencil2Icon />
                  <span className="link-text">탭아이템 2</span>
                  <span className="badge outline">99</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="tab3">
                <div className="tab-link">
                  <Pencil2Icon />
                  <span className="link-text">탭아이템 3</span>
                  <span className="badge outline">99</span>
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="w-full h-96 flex justify-center items-center rounded-[12px] bg-gray-100">
                <p className="font-bold">Tab 1 컨텐츠 그룹</p>
              </div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="w-full h-80 flex justify-center items-center rounded-[12px] bg-gray-100">
                <p className="font-bold">Tab 2 컨텐츠 그룹</p>
              </div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="w-full h-96 flex justify-center items-center rounded-[12px] bg-gray-100">
                <p className="font-bold">Tab 3 컨텐츠 그룹</p>
              </div>
            </TabsContent>
          </Tabs>

        </div>  
      </div>
    </div>

    </div>
  );
}