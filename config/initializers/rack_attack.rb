class Rack::Attack
  Rack::Attack.whitelist('allow from localhost') do |req|
    # Requests are allowed if the return value is truthy
    '69.64.203.18' == req.ip || '::1' == req.ip
  end
end