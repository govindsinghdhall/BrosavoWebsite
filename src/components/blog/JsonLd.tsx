interface JsonLdProps {
  data:
    | Record<string, unknown>
    | Array<Record<string, unknown> | null | undefined>;
}

export function JsonLd({ data }: JsonLdProps) {
  const payloads = (Array.isArray(data) ? data : [data]).filter(
    (payload): payload is Record<string, unknown> =>
      payload !== null &&
      payload !== undefined &&
      typeof payload === "object"
  );

  if (payloads.length === 0) {
    return null;
  }

  return (
    <>
      {payloads.map((payload, index) => {
        const json = JSON.stringify(payload)
          .replace(/</g, "\\u003c")
          .replace(/>/g, "\\u003e")
          .replace(/&/g, "\\u0026");

        return (
          <script
            key={`jsonld-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: json,
            }}
          />
        );
      })}
    </>
  );
}