export { Header };

function Header({ headerTitle }) {
  return (
    <div className="bg-sky-500 min-w-full min-h-fit absolute top-0 px-5 py-4 flex">
      <a href="/">
        <div className="min-w-full text-2xl">{headerTitle}</div>
      </a>
    </div>
  )
}