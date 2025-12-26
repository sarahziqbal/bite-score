import Button from "./Button";

export default function Banner() {
  return (
    <header className="bg-background border-b border-foreground/10">
      <div className="flex items-center justify-between px-6 py-3">
        
        {/*add logo here when we make it*/}
        <div className="flex-1"></div>

        <div className="flex gap-4">
          <Button bold>Map</Button>
          <Button bold>Ratings</Button>
        </div>

        <div className="flex-1 flex justify-end">
          <Button>My Account</Button>
        </div>

      </div>
    </header>
  );
}