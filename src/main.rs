
use actix_files::Files;
use actix_cors::Cors;
use  actix_files::NamedFile;
use actix_web::{get,web,App,HttpServer,Responder,HttpResponse,};

use rand::{thread_rng,Rng};
use rand::seq::SliceRandom;

// use std::path::PathBuf;


#[get("/creator/{size}")]

async fn creator(path: web::Path<usize>) -> impl Responder{
   let size = path.into_inner();

   let char_set: Vec<char> = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"
   .chars().collect();

   let mut rng = thread_rng();
   let password: String = (0..size)
       .map(|_| char_set.choose(&mut rng).unwrap()) // Use choose to pick a random character
       .collect();

   HttpResponse::Ok().body(format!("{}",password))
} 



async fn index() -> impl Responder {
   NamedFile::open("static/index.html")
}


#[actix_web::main]

async fn main() -> std::io::Result<()>{

    HttpServer::new(|| {
       App::new()
       .wrap(Cors::permissive())
       .service(creator)
       .service(Files::new("/static", "./static"))
       .route("/", web::get().to(index))
    })
    .bind("127.0.0.1:8084")?
    .run()
    .await
}
