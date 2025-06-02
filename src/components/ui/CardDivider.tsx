
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";


type CardDividerProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  linkUrl: string;
  linkText: string;
};

export default function CardDivider({ imageSrc, title, subtitle, description, linkUrl, linkText }: CardDividerProps) {
  return (
    <Card className="max-w-[400px] rounded-sm">
      <CardHeader className="flex gap-3">
        <Image
          alt={`${title} logo`}
          height={40}
          radius="sm"
          src={imageSrc}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">{subtitle}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={linkUrl}>
          {linkText}
        </Link>
      </CardFooter>
    </Card>
  );
}
