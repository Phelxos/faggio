import BookingsOtherHeader from "./bookingsOtherHeader/BookingsOtherHeader";
import BookingsOtherMain from "./bookingsOtherMain/BookingsOtherMain";

export default function BookingsOther() {
  return (
    <div className="rounded-lg border-8 border-emerald-900/50 mt-10">
      <BookingsOtherHeader />
      <BookingsOtherMain />
    </div>
  );
}
