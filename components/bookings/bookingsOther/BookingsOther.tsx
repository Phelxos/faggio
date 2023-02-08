import BookingsOtherHeader from "./bookingsOtherHeader/BookingsOtherHeader";
import BookingsOtherMain from "./bookingsOtherMain/bookingsOtherMain";

export default function BookingsOther() {
  return (
    <div className="rounded-lg border-2 border-emerald-700/50 bg-emerald-900">
      <BookingsOtherHeader />
      <BookingsOtherMain />
    </div>
  );
}
