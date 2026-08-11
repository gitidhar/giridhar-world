export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/landing.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          fontSize: "12px",
        }}
      >
        hi
      </div>
    </main>
  );
}