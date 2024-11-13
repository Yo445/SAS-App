import React from "react";
import Card from "../../components/custom/Card";

export default function ListofSevices() {
  return (
    <div className="h-full min-h-screen w-full bg-transparent">
           <div className="mt-12 text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">List of Services</h2>
        </div>
      <div className="grid gap-3 md:grid-cols-4 md:gap-4 mt-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
