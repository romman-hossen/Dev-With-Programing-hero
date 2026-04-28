import { Card } from "@heroui/react";
import Link from "next/link";

const TaskCard = ({ task }) => {
  // console.log(task)
  const {title,description,priority} = task;
  return (
    <div>
      <Card variant="primary" className="border-2 border-primary">
        {/* <CircleDollar
          aria-label="Dollar sign icon"
          className="text-primary size-6"
          role="img"
        /> */}
        <Card.Header>
          <Card.Title>{title}!</Card.Title>
          <Card.Description>
           {description}
          </Card.Description>
        </Card.Header>
        <Card.Footer>
          <Link
            aria-label="Go to Acme Creator Hub (opens in new tab)"
            href="https://heroui.com"
            rel="noopener noreferrer"
            target="_blank"
          >
           {priority}
            {/* <Link.Icon aria-hidden="true" /> */}
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default TaskCard;
