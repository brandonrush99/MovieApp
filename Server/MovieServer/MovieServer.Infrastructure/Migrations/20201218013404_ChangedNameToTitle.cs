using Microsoft.EntityFrameworkCore.Migrations;

namespace MovieServer.Infrastructure.Migrations
{
    public partial class ChangedNameToTitle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Movie",
                newName: "Title");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Movie",
                newName: "Name");
        }
    }
}
