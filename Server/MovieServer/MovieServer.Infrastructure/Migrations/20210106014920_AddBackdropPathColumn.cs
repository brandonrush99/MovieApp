using Microsoft.EntityFrameworkCore.Migrations;

namespace MovieServer.Infrastructure.Migrations
{
    public partial class AddBackdropPathColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Backdrop_Path",
                table: "Movie",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Backdrop_Path",
                table: "Movie");
        }
    }
}
