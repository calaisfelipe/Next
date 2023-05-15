export default function MessageField({ message, type }) {
  return (
    <div
      className={
        type === "user"
          ? "w-auto rounded-xl bg-gray-300 p-2 text-sm self-start"
          : "w-auto rounded-xl bg-red-300 p-2 text-sm self-end"
      }
    >
      {message}
    </div>
  );
}
