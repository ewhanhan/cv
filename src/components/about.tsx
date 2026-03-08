type AboutProps = {
  summary: string;
};

export function About({ summary }: AboutProps) {
  return (
    <>
      <h2 className="text-xl font-bold">About</h2>
      <p className="font-mono text-sm text-pretty text-muted-foreground">
        {summary}
      </p>
    </>
  );
}
