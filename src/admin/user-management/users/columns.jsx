"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export const columns = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
        className="p-0 font-semibold"
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
        className="p-0 font-semibold"
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <Select
        onValueChange={(value) => {
          column.setFilterValue(value === "all" ? undefined : value);
        }}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Filter Role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Roles</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="viewer">Viewer</SelectItem>
          <SelectItem value="editor">Editor</SelectItem>
        </SelectContent>
      </Select>
    ),
    cell: ({row}) => (
      <div className="uppercase">{row.getValue("role")}</div>
    )
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const value = row.getValue("status");
      return (
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${
            value === "active"
              ? "bg-green-100 text-green-700"
              : "bg-zinc-100 text-zinc-700"
          }`}
        >
          {value}
        </span>
      );
    },
  },
];
