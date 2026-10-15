import Form from "next/form";

export default function VendorSearch() {
  return (
    <Form
      action="/vendors"
      className="flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-[0_12px_32px_rgba(43,38,36,0.06)] md:flex-row md:items-center"
    >
      <label className="flex min-w-0 flex-col gap-1 px-4 py-2 md:flex-1 md:border-r md:border-divider">
        <span className="text-xs font-semibold">Looking for</span>
        <select
          name="category"
          defaultValue="photographer"
          className="w-full bg-transparent text-ink-soft outline-none"
        >
          <option value="photographer">Photographer</option>
          <option value="videographer">Videographer</option>
          <option value="venue">Venue</option>
          <option value="florist">Florist</option>
          <option value="planner">Planner</option>
        </select>
      </label>

      <label className="flex min-w-0 flex-col gap-1 px-4 py-2 md:flex-1 md:border-r md:border-divider">
        <span className="text-xs font-semibold">Where</span>
        <input
          type="text"
          name="location"
          placeholder="Dallas, TX"
          className="w-full bg-transparent text-ink outline-none placeholder:text-ink-muted"
        />
      </label>

      <label className="flex min-w-0 flex-col gap-1 px-4 py-2 md:flex-1">
        <span className="text-xs font-semibold">Wedding date</span>
        <input
          type="date"
          name="date"
          className="w-full bg-transparent text-ink outline-none"
        />
      </label>

      <button
        type="submit"
        className="min-h-11 w-full cursor-pointer rounded-xl bg-primary px-7 font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:w-auto"
      >
        Search
      </button>
    </Form>
  );
}
