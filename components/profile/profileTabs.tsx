"use client";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
//import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FunctionComponent } from "react";

interface profileTabsProps {}

const ProfileTabs: FunctionComponent<profileTabsProps> = () => {
  const tabs = ["intr", "clients", "work", "contract"];
  const router = useRouter();
  const params = useSearchParams();

  const _selectedTab = (params.get("tab") as string) ?? "intr";
  const selectedIndex = tabs.indexOf(_selectedTab) ?? 0;

  return (
    <div className="p-0">
      <Tab.Group
        // 👇 2. make the Tab.Group component a "controlled" component
        // by providing selectedIndex and onChange
        /*   selectedIndex={selectedIndex}
        onChange={(index) => {
          const tab = tabs.at(index);
          router.replace(`/profile/${tab}`, { shallow: true });
        }} */
        onChange={(index) => {
          console.log("Changed selected tab to:", index);
        }}
      >
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {/* {tabs.map((tab) => (
            // 👇 3. use the next/link component as the component for the Tab component.
            // this will add the LinkProps to the tab component like `href`,`shallow`,etc.
            <Tab key={tab} as={Link} href={`/profile/${tab}`} shallow>
              {tab}
            </Tab>
          ))} */}
          {tabs.map((tab, index) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels
          className={classNames(
            "rounded-xl bg-white p-3",
            "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
          )}
        >
          <Tab.Panel>Intr Content</Tab.Panel>
          <Tab.Panel>Clients Content</Tab.Panel>
          <Tab.Panel>Work Content</Tab.Panel>
          <Tab.Panel>Contract Content</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/* use to check the window location in demo */}
      {typeof window !== "undefined" && (
        <pre>Current Location : {window.location.href}</pre>
      )}
    </div>
  );
};

export default ProfileTabs;
