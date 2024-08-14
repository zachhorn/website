import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { ArrowRightCircle } from "lucide-react";
import { communityItems, developmentItems } from "./links";

const PopOverSmall = ({ type }: { type: "community" | "development" }) => {
  const items = type === "community" ? communityItems : developmentItems;
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex cursor-pointer items-center justify-center text-sm font-medium capitalize leading-normal hover:text-primary xl:text-sm ">
          {type}
          <ChevronDownIcon
            className="text-gra -mr-1 ml-1 h-4 w-4"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-1/2 z-10 mt-4 flex w-[303px] origin-top-right  -translate-x-1/2   flex-col overflow-hidden rounded-3xl  border bg-background2 shadow focus:outline-none">
          <div className="p-5">
            {items.map((item, i: any) => {
              return (
                <Menu.Item key={i}>
                  {({ active }) => (
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : "_self"}
                      className={`flex cursor-pointer items-center  gap-6 px-4 py-3    ${
                        active ? "" : ""
                      } `}
                    >
                      <div className="text-[#9CA3AF] dark:text-para">
                        {item.icon ? (
                          <item.icon size={24} strokeWidth={1.5} />
                        ) : (
                          item.customIcon
                        )}
                      </div>
                      <div className="font-semibold">
                        <p className="flex items-center text-sm font-bold text-foreground ">
                          {item.title}
                          {item.link.startsWith("http") ? (
                            <ArrowRightCircle
                              className="ml-1 inline-block"
                              size={16}
                            />
                          ) : (
                            ""
                          )}
                        </p>
                      </div>
                    </a>
                  )}
                </Menu.Item>
              );
            })}
          </div>
          <div className="border-t bg-gray-50 px-8 py-3 dark:bg-background">
            <a
              href="https://shop.akash.network/"
              target="_blank"
              className="font-semibold"
            >
              <p className="flex items-center text-sm font-bold text-foreground ">
                Swag Shop
                <ArrowRightCircle
                  className="ml-1 inline-block -rotate-45 stroke-[1.5px]"
                  size={16}
                />
              </p>
              <p className="mt-1 text-sm font-normal text-para">
                A selection of Akash Network apparel and accessories
              </p>
            </a>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default PopOverSmall;

export const CommunityNavbar = ({
  pathname,
  type,
}: {
  pathname: string;
  type: "community" | "development";
}) => {
  const items = type === "community" ? communityItems : developmentItems;
  return (
    <div className="border-y">
      <div className="container flex">
        {items.map((item, i: any) => {
          return (
            <a
              key={i}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              className={clsx(
                "flex cursor-pointer items-center gap-2  p-4 text-para    ",
                pathname === item.link ||
                  pathname?.split("/")[2] === item.link?.split("/")[2]
                  ? "border-b-2 border-foreground "
                  : "",
              )}
            >
              {item.icon ? (
                <item.icon size={24} strokeWidth={1.5} />
              ) : (
                item.customIcon
              )}
              <h1 className="text-sm font-medium text-foreground">
                {item.title}
              </h1>
            </a>
          );
        })}
      </div>
    </div>
  );
};
