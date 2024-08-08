import Header from '@/containers/cases/header';
import Map from '@/containers/cases/map';
import Sidebar from '@/containers/cases/sidebar';

export default function Cases() {
  return (
    <>
      <Header />
      <div className="relative flex flex-1">
        <Sidebar />
        <Map />
      </div>
    </>
  );
}
