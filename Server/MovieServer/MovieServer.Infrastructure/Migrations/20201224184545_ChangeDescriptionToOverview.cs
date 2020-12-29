using Microsoft.EntityFrameworkCore.Migrations;

namespace MovieServer.Infrastructure.Migrations
{
    public partial class ChangeDescriptionToOverview : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Movie",
                newName: "Overview");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Overview",
                table: "Movie",
                newName: "Description");
        }
    }
}
