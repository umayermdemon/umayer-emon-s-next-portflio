/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-background text-foreground text-white">
      <Card className="w-[400px] p-4 text-center shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            404 - Page Not Found
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link href="/">
            <Button className="border border-secondaryColor rounded-xl hover:bg-secondaryColor hover:text-black text-white">
              Go Back Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
