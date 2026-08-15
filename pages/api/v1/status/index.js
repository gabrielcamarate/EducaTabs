function status(request, response) {
  response.status(200).json({ chave: "Great!!" });
}

export default status;
