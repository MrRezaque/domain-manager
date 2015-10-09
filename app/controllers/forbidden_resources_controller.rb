class ForbiddenResourcesController < ApplicationController
  before_action :set_forbidden_resource, only: [:show, :edit, :update, :destroy]

  # GET /forbidden_resources
  # GET /forbidden_resources.json
  def index
    @forbidden_resources = ForbiddenResource.all
  end

  # GET /forbidden_resources/1
  # GET /forbidden_resources/1.json
  def show
  end

  # GET /forbidden_resources/new
  def new
    @forbidden_resource = ForbiddenResource.new
  end

  # GET /forbidden_resources/1/edit
  def edit
  end

  # POST /forbidden_resources
  # POST /forbidden_resources.json
  def create
    @forbidden_resource = ForbiddenResource.new(forbidden_resource_params)

    respond_to do |format|
      if @forbidden_resource.save
        format.html { redirect_to @forbidden_resource, notice: 'Forbidden resource was successfully created.' }
        format.json { render :show, status: :created, location: @forbidden_resource }
      else
        format.html { render :new }
        format.json { render json: @forbidden_resource.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /forbidden_resources/1
  # PATCH/PUT /forbidden_resources/1.json
  def update
    respond_to do |format|
      if @forbidden_resource.update(forbidden_resource_params)
        format.html { redirect_to @forbidden_resource, notice: 'Forbidden resource was successfully updated.' }
        format.json { render :show, status: :ok, location: @forbidden_resource }
      else
        format.html { render :edit }
        format.json { render json: @forbidden_resource.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /forbidden_resources/1
  # DELETE /forbidden_resources/1.json
  def destroy
    @forbidden_resource.destroy
    respond_to do |format|
      format.html { redirect_to forbidden_resources_url, notice: 'Forbidden resource was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_forbidden_resource
      @forbidden_resource = ForbiddenResource.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def forbidden_resource_params
      params.require(:forbidden_resource).permit(:name)
    end
end
