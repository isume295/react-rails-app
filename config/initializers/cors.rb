Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*' # Change this to restrict origins if needed
      resource '*', headers: :any, methods: [:get, :post, :options]
    end
  end
  