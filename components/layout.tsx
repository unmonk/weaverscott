import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Sidebar from "./sidebar";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-base-100 drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <Sidebar />
        <div className="drawer-content flex flex-col bg-base-100">
          <div className="md:flex md:justify-center">
            <main className="p-6 pt-10 max-w-[900px]">{children}</main>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;

{
  /* <div class="bg-base-100 drawer drawer-mobile">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col bg-base-100">
    <Header title={SITE_TITLE} />
    <div class="md:flex md:justify-center">
      <main class="p-6 pt-10 max-w-[900px]">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
  {includeSidebar && <SideBar />}
</div>; */
}
