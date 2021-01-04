using Microsoft.EntityFrameworkCore.Migrations;

namespace MovieServer.Infrastructure.Migrations
{
    public partial class AddPoster_PathColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Poster_Path",
                table: "Movie",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Poster_Path",
                table: "Movie");
        }
    }
}
